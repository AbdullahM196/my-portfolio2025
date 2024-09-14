type category = {
  _id: string;
  title: string;
};
type Article = {
  _id: string;
  title: string;
  content: {
    introduction: string;
    content: string;
    summary: string;
  };
  img: { url: string; name: string };
  category: category;
  createdAt: Date;
  updatedAt: Date;
};
