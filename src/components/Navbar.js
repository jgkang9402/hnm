import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({setAuthenticate}) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate()
  const logonavigate = useNavigate()
  
  const goToLogin =()=>{
    navigate('/login')
  }
  const goToMain =()=>{
    logonavigate('/')
  }
  const search = (event)=>{
    if(event.key === 'Enter'){
      // 엔터입력시 입력한 검색어를 읽어와서 url을 바꿔준다 코드작성
      // console.log('enter key press', event.key); // 엔터키먹는지 확인
      let keyword = event.target.value
      console.log(keyword);
      
      navigate(`/?q=${keyword}`)
    }
    // console.log('key press');

  }
  console.log(setAuthenticate);
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{setAuthenticate==true?"로그아웃":"로그인"}</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://i.pinimg.com/originals/0b/6a/4e/0b6a4e902c6f351555b37c6cb8dca4fc.jpg"
          alt=""
          onClick={goToMain}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
