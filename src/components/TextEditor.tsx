

import React from "react";
import ReactQuill from "react-quill";

let TextEditor : React.FC<any> = (props)=>{


  let { value, editerOnChange } = props;


  const modules: any = {
    toolbar: [
      // [{ header: '1' }, { header: '2' }, { font: [] }],
      // [{ size: [] }],
      ['bold', 'italic', 'underline'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        // { indent: '-1' },
        // { indent: '+1' }
      ],
      ['link' /*, 'image', 'video' */],
      // ['clean']
    ],
  }



  return(
    <React.Fragment>
                                                <ReactQuill
                                                    theme="snow"
                                                    // value={convertedText}
                                                    value={value}
                                                    onChange={editerOnChange}
                                                    placeholder="Write About Youself..."
                                                    modules={modules}
                                                    style={{ height : '20rem' , minHeight: '20rem' , marginBottom : 35 }}
                                           />
    </React.Fragment>
  )
}

export default TextEditor;

