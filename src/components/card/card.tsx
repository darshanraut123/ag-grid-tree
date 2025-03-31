import { Card as MuiCard, Typography } from "@mui/material";
import "./card.css";
import LinkIcon from "@mui/icons-material/Link";

export default function Card({ data, activeTabId, setActiveTabId }: any) {
  return (
    <MuiCard
      onClick={() => setActiveTabId(data.id)}
      className={`card_main ${
        data.id === activeTabId
          ? "light_text theme_dark_grey"
          : "dark_text theme_grey"
      }`}
    >
      <div className="card_left_box">
        <LinkIcon
          sx={{
            color: data.id === activeTabId ? "#7afbd0" : "inherit",
            height: "70px",
            width: "70px",
          }}
        />
      </div>
      <div className="card_right_box">
        <Typography variant="h4">{data.count}</Typography>
        <Typography variant="caption">{data.label}</Typography>
      </div>
    </MuiCard>
  );
}
