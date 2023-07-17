import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'components/common/Button';
import styles from './EditQuestionPostingBoard.module.scss';
import { useGetCommunityPostQuery, useEditCommunityPostMutation } from 'api/communityApiSlice';

function EditQuestionPostingBoard() {
  const url = new URL(window.location.href);
  const postId = url.pathname.split('/')[3];
  const { data: post, error, isLoading } = useGetCommunityPostQuery(postId);

  const navigate = useNavigate();

  const [editCommunityPostMutation] = useEditCommunityPostMutation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const autoResizeHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleEditPost = async () => {
    try {
      const { data }: any = await editCommunityPostMutation({ id: postId, title, content });
      navigate(-1);
    } catch (error) {
      console.log('게시글 수정 실패:', error);
    }
  };

  return (
    <div className={styles.container}>
      <Link to='/community'>
        <span className={styles.category}>목록으로</span>
      </Link>
      <form className={styles.contentContainer}>
        <input type='text' value={title} onChange={handleTitleChange} className={styles.title} spellCheck='false' />
        <textarea
          rows={1}
          value={content}
          className={styles.content}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            autoResizeHeight();
            handleContentChange(event);
          }}
          spellCheck='false'
          ref={textareaRef}
        />
      </form>
      <div className={styles.buttonContainer}>
        <Button
          text='취소'
          className='whiteButton'
          onClick={() => {
            navigate(-1);
          }}
        />
        <Button text='수정' onClick={handleEditPost} />
      </div>
    </div>
  );
}

export default EditQuestionPostingBoard;
