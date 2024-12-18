import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import c1 from "../image/card-1.avif";
import c2 from "../image/card-2.webp";
import c3 from "../image/card-3.webp";
import c4 from "../image/card-4.jpg";
import c5 from "../image/card-5.webp";
import c6 from "../image/card-6.webp";
import c7 from "../image/card-7.webp";
import c8 from "../image/card-8.webp";
import c9 from "../image/card-9.webp";
import c10 from "../image/card-10.webp";
import c11 from "../image/card-11.webp";
import c12 from "../image/card-12.webp";


export default function ActionAreaCard() {
  return (
    <div className="container mt-4">
      <Typography variant="h4" align="center" gutterBottom>
        Avengers Characters
      </Typography>
      <div className="row gy-4">
        {/* Existing Cards */}
        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c1} alt="Iron Man" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Iron Man
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Iron Man is the best leader of the Avengers and in the Marvel universe.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c2} alt="Captain America" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Captain America
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Recipient of the Super Soldier serum, Steve Rogers fights for American ideals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c3} alt="Thor" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thor
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Thor, the God of Thunder, embarks on a journey of self-discovery.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        {/* Additional Characters - New Cards */}
        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c4} alt="Spider-Man" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spider-Man
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Teenage science whiz Peter Parker fights crime as Spider-Man.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c5} alt="Black Panther" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Black Panther
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  T'Challa, the king of Wakanda, defends his nation as the powerful and noble Black Panther.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c6} alt="Hulk" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hulk (Bruce Banner)
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Scientist Bruce Banner transforms into the green rage machine, Hulk.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        {/* New Cards for Additional Characters */}
        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c7} alt="Black Widow" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Black Widow
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Natasha Romanoff, a former KGB operative, fights for the greater good as Black Widow.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c8} alt="Scarlet Witch" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Scarlet Witch (Wanda Maximoff)
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Wanda Maximoff, with her reality-bending powers, is one of the strongest Avengers.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c9} alt="Loki" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Loki
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  The God of Mischief, Loki, is a master manipulator and the brother of Thor.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c10} alt="Vision" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vision
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Vision, a synthezoid created by Ultron, possesses incredible strength and intelligence.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c11} alt="Ant-Man" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ant-Man
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Scott Lang, with his ability to shrink or grow in size, fights for justice as Ant-Man.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow" sx={{ padding: "16px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={c12} alt="Doctor Strange" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Doctor Strange
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Doctor Stephen Strange, the Sorcerer Supreme, defends Earth against mystical threats.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
