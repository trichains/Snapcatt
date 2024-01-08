import { Grid } from '@chakra-ui/react';

const ProfilePosts = () => {
  return (
    <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={1}>
      ProfilePosts
    </Grid>
  );
};

export default ProfilePosts;
