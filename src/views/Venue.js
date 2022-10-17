import React from 'react';
import GenericSection from "../components/sections/GenericSection";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import Button from "../components/elements/Button";
import ButtonGroup from "../components/elements/ButtonGroup";
import ImportantDate from "../components/sections/ImportantDate";
import Carousel from "../components/elements/Carousel";
import CarouselItem from "../components/elements/CarouselItem";
import {Box, CardMedia, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

class Keynote extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeroFull content={{title: 'Venue',
                    inside:<><p>UCC/BDCAT 2022 hosted at <strong>AC Hotel by Marriott Vancouver Waterfront</strong> 333 West Columbia Way
                      Vancouver, WA 98660. </p>
                      <Grid container spacing={2}>
                          <Grid item xs={12}>
                              <Carousel autorotate={true} style={{display:'flex'}}>
                                  <CarouselItem>
                                      <Card sx={{ width: '100%' }}>
                                          <CardMedia
                                              component="img"
                                              image={require(`./../assets/images/venue/IMG_8706.JPG`)}
                                              style={{height:400}}
                                          />
                                      </Card>
                                  </CarouselItem>
                                  <CarouselItem>
                                      <Card sx={{ width: '100%' }}>
                                          <CardMedia
                                              component="img"
                                              image={require(`./../assets/images/venue/inside1.jpeg`)}
                                              style={{height:400}}
                                          />
                                      </Card>
                                  </CarouselItem>
                                  <CarouselItem>
                                      <Card sx={{ width: '100%' }}>
                                          <CardMedia
                                              component="img"
                                              image={require(`./../assets/images/venue/inside2.jpeg`)}
                                              style={{height:400}}
                                          />
                                      </Card>
                                  </CarouselItem>
                                  <CarouselItem>
                                      <Card sx={{ width: '100%' }}>
                                          <CardMedia
                                              component="img"
                                              image={require(`./../assets/images/venue/IMG_8709.JPG`)}
                                              style={{height:400}}
                                          />
                                      </Card>
                                  </CarouselItem>
                                  <CarouselItem>
                                      <Card sx={{ width: '100%' }}>
                                          <CardMedia
                                              component="img"
                                              image={require(`./../assets/images/venue/IMG_8710.JPG`)}
                                              style={{height:400}}
                                          />
                                      </Card>
                                  </CarouselItem>
                                  <CarouselItem>
                                      <Card sx={{ width: '100%' }}>
                                          <CardMedia
                                              component="img"
                                              image={require(`./../assets/images/venue/IMG_8711.JPG`)}
                                              style={{height:400}}
                                          />
                                      </Card>
                                  </CarouselItem>
                              </Carousel>
                          </Grid>
                          <Grid item xs={12} style={{zIndex: 2}}>
                              <Paper elevation={24}>
                                  <div style={{padding:20}}>
                                      <Typography paragraph >
                                      AC Hotel by Marriott Vancouver Waterfront is located in Vancouver, within 6.2 miles of University of Portland and 7.2 miles of Moda Center. The property is around 7.4 miles from Oregon Convention Center, 7.7 miles from Portland Union Station and 8 miles from Lan Su Chinese Garden. Governor Tom McCall Waterfront Park is 9 miles from the hotel and Washington Park International Rose Test Gardens is 9.2 miles away.
                                      </Typography>
                                      <Typography paragraph >
                                      Portland Art Museum is 8.5 miles from the hotel, while Portland State University is 8.8 miles away. The nearest airport is Portland International Airport <LocalAirportIcon fontSize="small"/>, 11 miles from AC Hotel by Marriott Vancouver Waterfront.
                                      </Typography>
                                      <ButtonGroup>
                                          <Button color={"primary"}
                                              tag={'a'}
                                                  href={"https://www.marriott.com/en-us/hotels/pdxac-ac-hotel-vancouver-waterfront/overview/"}
                                                  target={"_blank"}> More information </Button>
                                          <Button color={"primary"}
                                                  tag={'a'}
                                                  href={"https://www.marriott.com/event-reservations/reservation-link.mi?id=1664222150985&key=GRP&app=resvlink"}
                                                  target={"_blank"}>Book now</Button>
                                      </ButtonGroup>
                                  </div>
                              </Paper>
                          </Grid>
                          <Grid item xs={12}>
                              <Card  sx={{ display: 'flex' }} raised >
                                  <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent:"center" }}>
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">GETTING HERE</Typography>
                                          <Typography paragraph >
                                              AC Hotel Vancouver Waterfront
                                          </Typography>
                                          <Typography paragraph variant="body2" color="text.secondary">
                                              333 West Columbia Way, Vancouver, Washington, USA, 98660
                                          </Typography>
                                          <Typography paragraph variant="body2" color="text.secondary">
                                              Tel: <a href="tel:+1%20360-993-8895%20">+1 360-993-8895</a>
                                          </Typography>
                                      </CardContent>
                                  </Box>
                                  <CardMedia
                                      component={"iframe"}
                                      image="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d44667.47460228995!2d-122.64858555271074!3d45.59623025753828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x5495a0aa74dc20d1%3A0x5bda7693380e5c3d!2sPortland%20International%20Airport%20(PDX)%2C%20Northeast%20Airport%20Way%2C%20Portland%2C%20OR!3m2!1d45.589769399999994!2d-122.59509419999999!4m5!1s0x5495a8bb2cea303b%3A0x7bac616ff6af8e0a!2sAC%20Hotel%20by%20Marriott%20Vancouver%20Waterfront%2C%20333%20W%20Columbia%20Way%2C%20Vancouver%2C%20WA%2098660!3m2!1d45.622779699999995!2d-122.67592479999999!5e0!3m2!1sen!2sus!4v1665918389043!5m2!1sen!2sus"
                                      width="600" height="400" style={{border:0}} allowFullScreen="" loading="lazy"
                                      referrerPolicy="no-referrer-when-downgrade"
                                      alt={"googlemap"}
                                  />
                              </Card>
                          </Grid>
                      </Grid>
                  </>
                }}/>
            </React.Fragment>
        );
    }
}

export default Keynote;
