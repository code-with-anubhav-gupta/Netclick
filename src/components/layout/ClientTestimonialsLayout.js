import SkeletonClientTestimonials from '../skelton/SkeletonClientTestimonials'
import ClientTestimonials from './ClientTestimonials'

const ClientTestimonialsLayout = ({loading}) => {
  return (
    <>
      {loading ? <SkeletonClientTestimonials /> : <ClientTestimonials />}
    </>
  )
}

export default ClientTestimonialsLayout