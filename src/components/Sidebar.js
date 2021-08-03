import React from 'react'
import {FaInbox,FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa';

export const Sidebar = ({selectedTab,setSelectedTab}) => {
    console.log(selectedTab)
    return (
        
        <div className="sidebar">
            <div
            className={setSelectedTab==="INBOX"?"active":""}
             onClick={()=>setSelectedTab("INBOX")}>
            <FaInbox className="icon"/> 
            Inbox</div>

            <div
            className={setSelectedTab==="TODAY"?"active":""}
             onClick={()=>setSelectedTab("TODAY")}>
            <FaRegCalendarAlt className="icon"/>
            Today</div>
            
            <div 
            className={setSelectedTab==="NEXT_7"?"active":""}
            onClick={()=>setSelectedTab("NEXT_7")}>
            <FaRegCalendar className="icon"/>
            Next 7 days</div>
            
        </div>
    )
}
export default Sidebar;
