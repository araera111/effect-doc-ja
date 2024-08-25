import * as ReactTweet from "react-tweet";
export const Tweet = ({ id }: { id: string }) => (
  <div>
    <ReactTweet.Tweet id={id}></ReactTweet.Tweet>
  </div>
);
