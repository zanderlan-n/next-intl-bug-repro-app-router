interface IParams {
  params: {
    slug: string;
  };
}

const WelcomePageWithSlug = ({ params: { slug } }: IParams) => {
  return <div>Welcome {slug}!</div>;
};

export default WelcomePageWithSlug;
