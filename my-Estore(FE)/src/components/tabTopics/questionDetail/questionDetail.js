import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function QuestionDetails({dataQues}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="questionItem">
      <p
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="showCollapse"
      >
        {dataQues.ques}
      </p>
      <Collapse in={open}>
        <div style={{width: "630px"}} id="example-collapse-text">
          {dataQues.anwers}
        </div>
      </Collapse>
    </div>
  );
}

export default QuestionDetails;