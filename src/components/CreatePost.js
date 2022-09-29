import React, { useRef } from "react";

const CreatePost = ({ uid, displayName }) => {




  return (
    <div className="new-post-modal">
      <form >
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default CreatePost;
