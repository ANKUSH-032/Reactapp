import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Book from './Bookmark';
import Com from './Comm';
import Like from './Like';
import Share from './Share';
import Pro from './Profile';

ReactDOM.render(
  <>
   <div class="card">
            <div class="post_header">
              <Pro/>
                <div class="heading" >
                    <p class="main_heading">mr.right</p>
                    <p class="sub_heading">Europe</p>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post_img">
              <Pro/></div>
            <div class="post_footer">
                <div class="left_box">
                    <input type="checkbox" value="" class="btn" />
                    
                  <Com/>
                    <Share/>

                </div>
                <div class="right_box">
                   <Book/>
                </div>
            </div>
        </div>

  </>
  , document.getElementById("root")
);