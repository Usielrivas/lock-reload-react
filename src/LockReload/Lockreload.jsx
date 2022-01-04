import { useEffect } from "react";

const Lockreload = (props) => {
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      //console.log(e)
      let dialogText = props.msg;
      e.returnValue = dialogText;
      return dialogText;
    });
  }, [props.msg]);

  return <div style={{ display: "none" }}>msg</div>;
};

export default Lockreload;
