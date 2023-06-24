import badgeDefault from 'assets/images/badgeDefault.png';
import badgeNewPost from 'assets/images/badgeNewPost.png';
import badgeWrite3Times from 'assets/images/badgeWrite3Times.png';
import badgeTumbler from 'assets/images/badgeTumbler.png';
import badgePublicTrans from 'assets/images/badgePublicTrans.png';
import badgeBasket from 'assets/images/badgeBasket.png';
import badgeCommunity from 'assets/images/badgeCommunity.png';

export default function getBadgeImagePath(checkedBadge: string | Promise<string>) {
  switch (checkedBadge) {
    case '신규':
      return badgeDefault;
    case '최초':
      return badgeNewPost;
    case '꾸준':
      return badgeWrite3Times;
    case '텀블':
      return badgeTumbler;
    case '텀블러':
      return badgeTumbler;
    case '교통':
      return badgePublicTrans;
    case '대중교통':
      return badgePublicTrans;
    case '버켓':
      return badgeBasket;
    case '장바구니':
      return badgeBasket;
    case '기록왕':
      return badgeCommunity;
    default:
      return badgeDefault;
  }
}
