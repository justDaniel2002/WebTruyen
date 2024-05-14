import { emptyAvatar } from "../data/data";
import { getEmailPrefix } from "../helpers/helper";

export const CommentContainer = ({ comment= [] }) => {
  return (
    <>
      <div>
        {comment.map((c) => (
          <div id={c.id} className="flex mb-3">
            <div className="h-12 w-12 mr-5">
              <img className="rounded-full" src={emptyAvatar} />
            </div>
            <div className="w-11/12">
                <div className="font-semibold text-xl text-blue-900">{getEmailPrefix(c?.user?.email)}</div>
                <div>{c?.content}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
