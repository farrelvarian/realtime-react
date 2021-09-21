/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { avatar } from "../../assets";
import BubbleChatReceiver from "../../components/base/bubbleChatReceiver";
import BubbleChatSender from "../../components/base/bubbleChatSender";
import Card from "../../components/base/card";
import SectionBlank from "../../components/module/sectionBlank";
import SectionChatroom from "../../components/module/sectionChatroom";
import SidebarMain from "../../components/module/sidebarMain";
import SidebarProfile from "../../components/module/sidebarProfile";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toastify } from "../../configs/toastify/toastify";
import ScrollToBottom from "react-scroll-to-bottom";

const Home = ({ socket, ...props }) => {
  const [search, setSearch] = useState("");
  const [Refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(null);
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");
  const userImage = localStorage.getItem("image");

  const history = useHistory();
  console.log(search);

  useEffect(() => {
    if (socket && contact) {
      socket.off("msgFromBackend");
      socket.on("msgFromBackend", (data) => {
        if (data.sender_id === contact.id) {
          setMessages((currentValue) => [...currentValue, data]);
        } else {
          toastify(`${data.sender_name}-> ${data.message}`, "warning");
        }
      });
    }
  }, [socket, contact]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}users${search}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        const dataContacts = result.data.data;
        setContacts(dataContacts);
      })
      .catch((error) => {
       toastify(error.response.data.message, "error");
      });
  }, [Refresh]);

  const handleSearch = (e) => {
    setSearch(`?search=${e.target.value}`);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };
  useEffect(() => {
    if (contact) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}messages/${contact.id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const resultMsg = res.data.data;
          setMessages(resultMsg);
        });
    }
  }, [contact]);

  const handleSendMessage = () => {
    if (socket && message) {
      socket.emit(
        "sendMessage",
        {
          idReceiver: contact.id,
          messageBody: message,
        },
        (data) => {
          setMessages((currentValue) => [...currentValue, data]);
        }
      );
      setMessage("");
    }
  };
  const logoutUser = () => {
    console.log("log");
    localStorage.clear();
    history.push(`/login`);
    toastify(`Your are logged out, bye!`, "info");
  };
  const editUser = () => {
    history.push(`/edit-profile`);
  };
  return (
    <StyledHome>
      <SidebarMain
  
        editProfile={editUser}
        logout={logoutUser}
        onChange={(e) => handleSearch(e)}
      >
        {contacts.map((item) => (
          <Card
            image={item.image ? item.image : avatar}
            name={item.name}
            message={item.socket_id === "-" ? "offline" : "online"}
            onClick={() => setContact(item)}
          />
        ))}
      </SidebarMain>
      {contact ? (
        <SectionChatroom
          profileMenu={() => setProfile(true)}
          avatar={contact.image ? contact.image : avatar}
          username={contact.name}
          status={contact.socket_id === "-" ? "offline" : "online"}
          inputName="chat"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onClick={handleSendMessage}
        >
          <ScrollToBottom className={"scroll-bottom"}>
            {messages.map((item) => {
              return contact.id === item.receiver_id ? (
                <BubbleChatSender
                  image={userImage === "null" ? avatar : userImage}
                  message={item.message}
                />
              ) : (
                <BubbleChatReceiver
                  image={contact.image ? contact.image : avatar}
                  message={item.message}
                />
              );
            })}
          </ScrollToBottom>
        </SectionChatroom>
      ) : (
        <SectionBlank />
      )}
      {profile ? (
        <SidebarProfile
          back={() => setProfile("")}
          name={contact.name}
          avatar={contact.image ? contact.image : avatar}
          status={contact.socket_id === "-" ? "offline" : "online"}
          phone={contact.phone === "null" ? "-" : contact.phone}
        />
      ) : (
        <></>
      )}
    </StyledHome>
  );
};

export default Home;

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
