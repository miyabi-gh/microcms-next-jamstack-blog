import { client } from "@pages/api/microcms";

export default async (req, res) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  
  const content = await client.get({
    endpoint: 'blogs',
    contentId: req.query.slug,
    queries: {draftKey: req.query.draftKey}
  }).then().catch(error => console.error(error));

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({
    slug: content["id"],
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/blogs/${content["id"]}` });
  res.end('Preview mode enabled');
};