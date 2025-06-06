import React from "react";

export default function ProfilePage({ children , dashboard , manage } 
: { children : React.ReactNode , dashboard : React.ReactNode , manage : React.ReactNode }) {
    return (
        <div className="flex flex-col w-full">
            { children }
            { dashboard }
            { manage }
        </div>
    )
}