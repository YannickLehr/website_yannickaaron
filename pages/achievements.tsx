import Achievements from 'components/achievements/achievements'
import PageLayout from 'components/layouts/pageLayout'

import { resume } from 'data/resume'


const Index = ({ resume }) => {

  return (
    <PageLayout title="Achievements" keywords="My achievements">
      <div>Next stars: {resume.basics.name}</div>
      <Achievements />
    </PageLayout>
  )
}

export function getStaticProps() {
  return {
    props: {
      resume: resume,
    },
  }
}

{/*
Index.getInitialProps = async (ctx) => {
  const client = new Client();
  await client.login.userPass({ username, password });

  const profile = await client.profile.getOwnProfile()

  //log the profile
  console.log(profile)
  return { profile: profile }
}
*/}

export default Index
