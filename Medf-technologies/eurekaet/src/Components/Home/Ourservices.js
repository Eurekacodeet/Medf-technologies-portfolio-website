import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import "./Ourservices.css";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    backgroundColor: "#fff",
    textAlign: "center",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#000",
      cursor: "pointer",
      "& $icon, & $heading, & $paragraph": {
        color: "#fff",
      },
    },
  },
  icon: {
    fontSize: 48,
    marginBottom: 10,
    color: "#000",
    transition: "all 0.2s ease-in-out",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    transition: "all 0.2s ease-in-out",
  },
  paragraph: {
    fontSize: 16,
    color: "#000",
    transition: "all 0.2s ease-in-out",
  },
}));

function MyCard() {
  const [hovered, setHovered] = useState(false);
  const classes = useStyles();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="card_spacing">
      <Card
        className={classes.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent>
          <Icon className={classes.icon}>face</Icon>
          <Typography className={classes.heading} variant="h4">
            Hello World!
          </Typography>
          <Typography className={classes.paragraph} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            hendrerit tortor at sapien bibendum auctor. Maecenas sit amet sem
            vitae justo vestibulum consequat vel vel neque.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="Our_serv_all_con">
        <div className="our_serv"><h1 id="o_h1">
            Our Services
            </h1>
 <h3 id="OSer"></h3> 
            </div>
      <div className="Card_arrangement">
        <MyCard />
        <MyCard />
        <MyCard />

        <MyCard />
        <MyCard />
        <MyCard />

        <MyCard />
        <MyCard />
        <MyCard />

        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </div>
  );
}

export default CardContainer;