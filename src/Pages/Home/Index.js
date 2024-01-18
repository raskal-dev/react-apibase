import React, { useEffect } from 'react'
import '../../assets/Css/home.css';
import $ from 'jquery';
import Menu from '../../Components/Menu/Index';

const Home = () => {

    useEffect(() => {
        $(document).ready(function(){
            var zindex = 10;
            
            $("div.card").click(function(e){
              e.preventDefault();
          
              var isShowing = false;
          
              if ($(this).hasClass("d-card-show")) {
                isShowing = true
              }
          
              if ($("div.dashboard-cards").hasClass("showing")) {
                // a card is already in view
                $("div.card.d-card-show")
                  .removeClass("d-card-show");
          
                if (isShowing) {
                  // this card was showing - reset the grid
                  $("div.dashboard-cards")
                    .removeClass("showing");
                } else {
                  // this card isn't showing - get in with it
                  $(this)
                    .css({zIndex: zindex})
                    .addClass("d-card-show");
          
                }
          
                zindex++;
          
              } else {
                // no dashboard-cards in view
                $("div.dashboard-cards")
                  .addClass("showing");
                $(this)
                  .css({zIndex:zindex})
                  .addClass("d-card-show");
          
                zindex++;
              }
              
            });
          });
    }, [])

  return (
    <div>
        <Menu/>
        <div class='row dashboard-cards'>
  <div class='card col-md-4'>
    <div class='card-title'>
      <h2>
        Contact Task
        <small>You have 14 pending tasks</small>
      </h2>
      <div class='task-count'>
        14
      </div>
    </div>
    <div class='card-flap flap1'>
      <div class='card-description'>
        <ul class='task-list'>
          <li>
            Sent Question Pending
            <span>59%</span>
          </li>
          <li>
            Sent Answer Pending
            <span>11%</span>
          </li>
          <li>
            File Attchment Pending
            <span>100%</span>
          </li>
          <li>
            Document Send Pending
            <span>7%</span>
          </li>
        </ul>
      </div>
      <div class='card-flap flap2'>
        <div class='card-actions'>
          <a class='btn' href='#'>Close</a>
        </div>
      </div>
    </div>
  </div>
  <div class='card col-md-4'>
    <div class='card-title'>
      <h2>
        Product Task
        <small>You have 101 pending tasks</small>
      </h2>
      <div class='task-count'>
        101
      </div>
    </div>
    <div class='card-flap flap1'>
      <div class='card-description'>
        <ul class='task-list'>
          <li>
            Sent Question Pending
            <span>59%</span>
          </li>
          <li>
            Sent Answer Pending
            <span>11%</span>
          </li>
          <li>
            File Attchment Pending
            <span>100%</span>
          </li>
          <li>
            Document Send Pending
            <span>7%</span>
          </li>
        </ul>
      </div>
      <div class='card-flap flap2'>
        <div class='card-actions'>
          <a class='btn' href='#'>Close</a>
        </div>
      </div>
    </div>
  </div>
  <div class='card col-md-4'>
    <div class='card-title'>
      <h2>
        Document Task
        <small>You have 9 pending tasks</small>
      </h2>
      <div class='task-count'>
        9
      </div>
    </div>
    <div class='card-flap flap1'>
      <div class='card-description'>
        <ul class='task-list'>
          <li>
            Sent Question Pending
            <span>59%</span>
          </li>
          <li>
            Sent Answer Pending
            <span>11%</span>
          </li>
          <li>
            File Attchment Pending
            <span>100%</span>
          </li>
          <li>
            Document Send Pending
            <span>7%</span>
          </li>
        </ul>
      </div>
      <div class='card-flap flap2'>
        <div class='card-actions'>
          <a class='btn' href='#'>Close</a>
        </div>
      </div>
    </div>
  </div>
  <div class='card col-md-4'>
    <div class='card-title'>
      <h2>
        Contact Task
        <small>You have 76 pending tasks</small>
      </h2>
      <div class='task-count'>
        76
      </div>
    </div>
    <div class='card-flap flap1'>
      <div class='card-description'>
        <ul class='task-list'>
          <li>
            Sent Question Pending
            <span>59%</span>
          </li>
          <li>
            Sent Answer Pending
            <span>11%</span>
          </li>
          <li>
            File Attchment Pending
            <span>100%</span>
          </li>
          <li>
            Document Send Pending
            <span>7%</span>
          </li>
        </ul>
      </div>
      <div class='card-flap flap2'>
        <div class='card-actions'>
          <a class='btn' href='#'>Close</a>
        </div>
      </div>
    </div>
  </div>
  <div class='card col-md-4'>
    <div class='card-title'>
      <h2>
        Agreement Task
        <small>You have 43 pending tasks</small>
      </h2>
      <div class='task-count'>
        43
      </div>
    </div>
    <div class='card-flap flap1'>
      <div class='card-description'>
        <ul class='task-list'>
          <li>
            Sent Question Pending
            <span>59%</span>
          </li>
          <li>
            Sent Answer Pending
            <span>11%</span>
          </li>
          <li>
            File Attchment Pending
            <span>100%</span>
          </li>
          <li>
            Document Send Pending
            <span>7%</span>
          </li>
        </ul>
      </div>
      <div class='card-flap flap2'>
        <div class='card-actions'>
          <a class='btn' href='#'>Close</a>
        </div>
      </div>
    </div>
  </div>
  <div class='card col-md-4'>
    <div class='card-title'>
      <h2>
        Audit Task
        <small>You have 24 pending tasks</small>
      </h2>
      <div class='task-count'>
        24
      </div>
    </div>
    <div class='card-flap flap1'>
      <div class='card-description'>
        <ul class='task-list'>
          <li>
            Sent Question Pending
            <span>59%</span>
          </li>
          <li>
            Sent Answer Pending
            <span>11%</span>
          </li>
          <li>
            File Attchment Pending
            <span>100%</span>
          </li>
          <li>
            Document Send Pending
            <span>7%</span>
          </li>
        </ul>
      </div>
      <div class='card-flap flap2'>
        <div class='card-actions'>
          <a class='btn' href='#'>Close</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home