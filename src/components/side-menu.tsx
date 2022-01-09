import { Drawer } from "@mui/material";
const SideMenu = () => {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            PaperProps={{
                style: {
                    height: "200px",
                    border: "1px solid black",
                    backgroundColor: "rgba(0,0,0,0.2)",
                },
            }}
        >
            <div className="item">臺北市</div>
            <div className="item">新北市</div>
        </Drawer>
    );
};

export default SideMenu;
