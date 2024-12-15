import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard() {
  return (
    <div className="container mt-4">
      <div className="row gy-4">
        {/* Existing Cards */}

        <div className="col-md-6 col-lg-4">
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1657558045738-21507cf53606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZlbmdlcnN8ZW58MHx8MHx8fDA%3D"
                alt="Iron Man"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Iron Man
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Iron Man is the best leader of the Avengers and in Marvel
                  universe.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/hd/marvel-captain-america-headshot-izd7nkymaau5a7ba.webp"
                alt="Captain America"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Captain America
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Recipient of the Super Soldier serum, Steve Rogers fights for
                  American ideals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/high/thor-hammer-1920-x-1080-piuqoc68ba2ben21.webp"
                alt="Thor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thor
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Thor, the God of Thunder, embarks on a journey of
                  self-discovery.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.marvel.com/content/1x/spidey02_ons_var_dsk_01.jpg"
                alt="Spider-Man"
              />
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
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/high/black-panther-hero-kgwks04h9m9c9zhk.webp"
                alt="Black Panther"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Black Panther
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  T'Challa, the king of Wakanda, defends his nation as the
                  powerful and noble Black Panther.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/hd/gladiator-hulk-fan-art-5rgmptkhlzwb8fp1.webp"
                alt="Hulk"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hulk (Bruce Banner)
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Scientist Bruce Banner transforms into the green rage machine,
                  Hulk.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        {/* New Cards */}

        <div className="col-md-6 col-lg-4">
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/high/black-widow-pose-4k-marvel-iphone-ipfbpdwchomr4rww.webp"
                alt="Black Widow"
              />
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
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/high/wanda-maximoff-scarlet-witch-evt29k972vz3ewq5.webp"
                alt="Scarlet Witch"
              />
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
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/hd/loki-in-black-17t0qozgkz6fyix0.webp"
                alt="Loki"
              />
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
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/high/vision-avengers-6efrl9hlqfavc70w.webp"
                alt="Vision"
              />
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
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/high/ant-man-in-fight-mode-0l9g75m5ocf4hoaa.webp"
                alt="Ant-Man"
              />
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
          <Card className="shadow">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapers.com/images/high/dr-strange-hand-power-2ktt4a4iez0e7tcz.webp"
                alt="Doctor Strange"
              />
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
