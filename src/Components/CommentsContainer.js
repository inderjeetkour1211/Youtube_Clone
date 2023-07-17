import React from "react";

const commentsData = [
  {
    name: "Inder",
    text: "lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Inder",
    text: "lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Inder",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Inder",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "Inder",
        text: "lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Inder",
            text: "lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Inder",
                text: "lorem ipsum dolor sit amet",
                replies: [],
              },
              {
                name: "Inder",
                text: "lorem ipsum dolor sit amet",
                replies: [],
              },
            ],
          },
          {
            name: "Inder",
            text: "lorem ipsum dolor sit amet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Inder",
    text: "lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Inder",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Inder",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "Inder",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-3">
      <img
        className=" w-8 h-8 mt-3"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        alt="user-icon"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
       <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
