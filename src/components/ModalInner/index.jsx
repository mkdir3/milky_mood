import React, {useState} from 'react'
import {Container, H3, H4, P, Socials, SuccessContainer} from './styles'
import Form from '../Form'
import {ReactComponent as Happy} from './happy_face.svg'
import {ReactComponent as Instagram} from './icon_instagram.svg'
import {ReactComponent as Facebook} from './icon_facebook.svg'
import {ReactComponent as Twitter} from './icon_twitter.svg'

const Input = ({handleSuccess}) => (
  <Container>
    <H3>Tickets & News</H3>
    <P>
      Abonnez-vous à notre newsletter pour être au courant de nos pré-ventes
      pour le World Tour 2022.
    </P>
    <Form handleSuccess={handleSuccess} />
  </Container>
)

const Success = () => (
  <SuccessContainer>
    <Happy />
    <H4>Yay! Merci à toi!</H4>
    <P>
      On espère que tu es aussi content que nous! Pendant ce temps, tu peux
      t'abonner à nos réseaux sociaux pour être au courant des dernières news :)
    </P>
    <Socials>
      <Instagram />
      <Twitter />
      <Facebook />
    </Socials>
  </SuccessContainer>
)

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />
}

export default ModalInner
