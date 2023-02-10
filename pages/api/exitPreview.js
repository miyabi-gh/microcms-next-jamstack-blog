export default (_req, res) => {
  res.clearPreviewData();
  res.writeHead(307, { Location: `/blogs` });
  res.end('Preview mode disabled');
}