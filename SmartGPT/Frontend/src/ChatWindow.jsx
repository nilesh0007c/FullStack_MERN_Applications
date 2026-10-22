import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState, useEffect } from "react";
import {ScaleLoader} from "react-spinners";
import { Link } from "react-router-dom";

function ChatWindow() {
    const {prompt, setPrompt, reply, setReply, currThreadId, setPrevChats, setNewChat} = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const getReply = async () => {
        setLoading(true);
        setNewChat(false);

        console.log("message ", prompt, " threadId ", currThreadId);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        };

        try {
            const response = await fetch("http://localhost:8080/api/chat", options);
            const res = await response.json();
            console.log(res);
            setReply(res.reply);
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }

    //Append new chat to prevChats
    useEffect(() => {
        if(prompt && reply) {
            setPrevChats(prevChats => (
                [...prevChats, {
                    role: "user",
                    content: prompt
                },{
                    role: "assistant",
                    content: reply
                }]
            ));
        }

        setPrompt("");
    }, [reply, setPrompt, setPrevChats]);


    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="chatWindow">
            <div className="navbar">
                <span>SmartGPT <i className="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv" onClick={handleProfileClick}>
                    <span className="userIcon"><img src="/public/user2.jpeg" alt="User Icon" /></span>
                </div>
            </div>
            {
                isOpen && (
                <div className="dropDown">
                    <div className="dropDownItem">
                        <div className="Row">
                            <div className="col-2">
                                 <img src="/public/user2.jpeg" alt="User Icon" className="SmluserIcon" />
                            </div>
                            <div className="col-6">
                             <div>Nilesh Chaudhari</div>
                             <div className="username">@nilesh0007c</div>
                            </div>
                        </div>  
                    </div>
                    <hr />
                    <Link  to="/upgrade-plan" className="dropDown-link" >
                        <div className="dropDownItem"><i className="fa-solid fa-cloud-arrow-up"></i> Upgrade plan</div>
                    </Link>
                    <Link  to="/settings" className="dropDown-link">
                        <div className="dropDownItem"><i className="fa-solid fa-gear"></i> Settings</div>
                    </Link>
                    <hr />
                    <Link  to="/help" className="dropDown-link">
                        <div className="dropDownItem"><i className="fa-solid fa-handshake-angle"></i> Help</div>
                    </Link>
                    <Link  to="/logout" className="dropDown-link">
                        <div className="dropDownItem"><i className="fa-solid fa-arrow-right-from-bracket"></i> Log out</div>
                    </Link>
                </div>
                )
            }
            <Chat></Chat>

            <ScaleLoader color="#fff" loading={loading}>
            </ScaleLoader>
            
            <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter'? getReply() : ''}
                    />
                    <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
                </div>
                <p className="info">
                    SmartGPT can make mistakes. Check important info. See Cookie Preferences.
                </p>
            </div>
        </div>
    )
}

export default ChatWindow;