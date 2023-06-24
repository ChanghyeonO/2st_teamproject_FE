import styles from './Main.module.scss';
import { useEffect, useState } from 'react';
import Button from 'components/common/Button';
import Modal from './Modal';
import Title from 'components/common/PageTitle';
import { userInfo, userDelete } from 'api/fetcher';
import { clearLocalStorage } from 'api/token';

interface UserData {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: string;
}

function Main() {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    profileImage: '',
  });

  // Edit 모달
  const handleShowEditModal = (): void => {
    setShowEditModal((prevState) => !prevState);
  };
  // Remove 모달
  const handleShowRemoveModal = (): void => {
    setShowRemoveModal((prevState) => !prevState);
  };

  // Edit 페이지 이동
  const handleNavigateToEdit = (): void => {
    window.location.href = '/mypage/edit';
  };

  // 회원 탈퇴
  const handleRemoveAccount = (): void => {
    userDelete();
    clearLocalStorage();
    alert('회원 탈퇴가 완료되었습니다. 그동안 EarF를 이용해주셔서 감사합니다.');
    window.location.href = '/';
  };

  // 유저 정보 불러오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { name, email, id, phoneNumber, profileImage }: UserData = (await userInfo()) as UserData;
        const userData = {
          name,
          email,
          id,
          phoneNumber,
          profileImage,
        };
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <>
      <div className={styles.main}>
        <Title title='마이페이지' />
        <div className={styles.contents}>
          <div className={styles.profile}>
            <div className={styles.imgContainer}>
              <img src={userData.profileImage} alt='프로필' />
            </div>
          </div>

          <div className={styles.dataFiledSet}>
            <div className={styles.dataFiled}>
              <div className={styles.fixedData}>
                <span>이름</span>
              </div>
              <div className={styles.fetchData}>{userData.name}</div>
            </div>
            <div className={styles.dataFiled}>
              <div className={styles.fixedData}>
                <span>아이디</span>
              </div>
              <div className={styles.fetchData}>{userData.id}</div>
            </div>
            <div className={styles.dataFiled}>
              <div className={styles.fixedData}>
                <span>이메일</span>
              </div>
              <div className={styles.fetchData}>{userData.email}</div>
            </div>
            <div className={styles.dataFiled}>
              <div className={styles.fixedData}>
                <span>전화번호</span>
              </div>
              <div className={styles.fetchData}>{userData.phoneNumber}</div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button text={'수정하기'} onClick={handleShowEditModal} />
            <Button text={'회원탈퇴'} className={'whiteButton'} onClick={handleShowRemoveModal} />
          </div>
        </div>
      </div>
      {showEditModal && (
        <Modal title={'수정하기'} handleShowModal={handleShowEditModal} handleNextAction={handleNavigateToEdit} />
      )}
      {showRemoveModal && (
        <Modal title={'회원탈퇴'} handleShowModal={handleShowRemoveModal} handleNextAction={handleRemoveAccount} />
      )}
    </>
  );
}

export default Main;
