import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = () => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">doloremque illum aliquid sunt</h3>

      <p>
        {' Posted by  '}

        <UserInfo />
      </p>
    </div>

    <p className="PostInfo__body">
      deserunt eos nobis asperiores et hic est debitis repellat molestiae optio
      nihil ratione ut eos beatae quibusdam distinctio maiores earum voluptates
      et aut adipisci ea maiores voluptas maxime
    </p>

    <CommentList />
  </div>
);
