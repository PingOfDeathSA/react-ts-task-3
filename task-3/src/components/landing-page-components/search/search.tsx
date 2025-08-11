import searchStyle from "./search.module.css";

export default function SerachComponent () {
    return (
        <div className={searchStyle.searchContainer} id="search">
           <input className={searchStyle.search} type="text" placeholder="Search" maxLength={20}/>
           <span
           style={{
            padding: "8px",
            cursor: "pointer",
               fontSize: "15px",
               borderRadius: "5px",
               fontWeight: "bold",
               fontFamily: "cursive",
               backgroundColor: "rgb(255, 0, 128)",
               color: "white"
           }}
           >Search</span>
        </div>
    );
}