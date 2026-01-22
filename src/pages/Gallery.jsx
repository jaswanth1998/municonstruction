import { Helmet } from 'react-helmet-async'
import { Gallery as GalleryComponent } from '../components/home'

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Muni Construction</title>
        <meta
          name="description"
          content="View our gallery of completed construction projects across Nova Scotia. See examples of our residential and commercial construction work."
        />
        <meta
          name="keywords"
          content="construction gallery, project photos, Halifax construction, Nova Scotia builder, completed projects"
        />
      </Helmet>

      <main className="pt-20">
        <GalleryComponent />
      </main>
    </>
  )
}

export default Gallery
