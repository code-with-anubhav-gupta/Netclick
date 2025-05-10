import SkeletonClientTestimonials from '../skelton/SkeletonClientTestimonials'
import ClientTestimonials from './ClientTestimonials'
import { useAppContext } from "@/context/Context";

const ClientTestimonialsLayout = () => {
  const { loading } = useAppContext();
  return (
    <>
      {loading ? <SkeletonClientTestimonials /> : <ClientTestimonials />}
    </>
  )
}

export default ClientTestimonialsLayout