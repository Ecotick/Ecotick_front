// import "./Card.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function StoreCard({ content }) {
  return (
    <Card sx={{ maxWidth: "345px", display: "flex", marginTop: "10px" }}>
      <CardMedia
        component="img"
        height="50"
        sx={{ width: 50, display: "inline-block" }}
        image={
          content.storefrontUrl ? content.storefrontUrl : "/media/No_photo.jpg"
        }
        alt="Store front"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" sx={{ textAlign: "center" }}>
          {content["Nom du commerce"]}
        </Typography>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default StoreCard;

// <div className="card-container">
//   <section className="card-section">
//     <h1>
//       Id : {content.UserId} - Nom : {content.Name}{" "}
//     </h1>
//     {content.Devanture && (
//       <img src={content.Devanture} alt="Devanture Commerce"></img>
//     )}
//   </section>
// </div>
