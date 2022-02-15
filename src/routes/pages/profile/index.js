import { Divider, Grid, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import profilePic from '@assets/vaseProfile.jpg';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    margin: '20px',
  },
  profileImgContainer: {
    width: '60',
    aspectRatio: '1/1',
    overflow: 'hidden',
    border: '2px solid #000',
    borderRadius: '5px',
  },
  profileImg: {
    width: '100%',
    height: 'auto',
  },
  infoRoot: {
    padding: '50px',
  },
}));

const Profile = () => {
  const classes = useStyles();
  const name_fa = useSelector((Store) => Store.main.user.name_fa);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6} md={3}>
        <Box className={classes.profileImgContainer}>
          <img alt="" src={profilePic} className={classes.profileImg} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={9} className={classes.infoRoot}>
        <Box>
          <Typography variant="h4">{name_fa}</Typography>
          <Divider sx={{ my: 3 }} />
          <Stack direction="column">Infos</Stack>
          <Divider sx={{ my: 3 }} />
          <Box>
            <Typography>More</Typography>
            <Typography paragraph>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
