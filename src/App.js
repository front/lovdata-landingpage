import React, { Fragment, useState } from 'react';

import {
  HeaderSection,
  FooterSection,
  TeaserSection,
} from './layout';

import {
  Button,
  Card,
  Field,
  Icon,
  List,
  ListItem,
  Spinner,
  Table,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from './components';

function App () {
  let formRef = React.createRef();

  const [submitting, setSubmitting ] = useState(false);
  const [isSubmitted, setIsSubmitted ] = useState(false);
  const [formMsg, setFormMsg ] = useState('');

  function handleScrollToForm() {
    formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      org: event.target.org.value,
      contact: event.target.contact.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
    };

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = process.env;

    sendFeedback(template, event.target.email.value, receiverEmail, data);
  }

  function sendFeedback(templateId, senderEmail, receiverEmail, content) {
    setSubmitting(true);

    window.emailjs.send(
      'sendgrid',
      templateId,
      {
        senderEmail,
        receiverEmail,
        ...content
      })
      .then(res => {
        console.log('Form sent!');

        setSubmitting(false);
        setIsSubmitted(true);
        setFormMsg('Form sent!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => {
        console.error('Failed to send form. Error: ', err);

        setSubmitting(false);
        setIsSubmitted(true);
        setFormMsg('Failed to send form.');
      });
  }

  return (
    <Fragment>
      <a href="#main" className="skip-main">Skip to main content</a>
      <HeaderSection onClickButton={ handleScrollToForm }>
        <div className="row">
          <div className="col-6">
            <h1 tabIndex="0">Ditt viktigste juridiske arbeidsverktøy</h1>
            <p tabIndex="0">Lovdata tilbyr et gunstig abonnement for kommunens ansatte.</p>
            <p tabIndex="0">Abonnementsprisen faktureres på grunnlag av innbyggertallet i kommunen.</p>
            <p tabIndex="0">Alle ansatte med personlig e-postadresse med kommunenes domene kan benytte seg av avtalen.</p>
          </div>

          <div className="col-6">
            <form ref={formRef} onSubmit={ handleSubmitForm }>
              <h3 tabIndex="0">Få 6 måneder gratis</h3>
              <Field name="name" label="Kommunenavn" />
              <Field name="org" label="Organisasjonsnummer" />
              <Field name="contact" label="Kontaktperson" />
              <Field name="phone" label="Telefonnummer" type="phone" className="field--half" />
              <Field name="email" label="E-postadresse" type="email" className="field--half" />

              { (!submitting && !isSubmitted ) && <div>
                <Button primary type="submit">Få 6 måneder gratis</Button>
                </div>
              }
              { isSubmitted && <div>{ formMsg }</div>}
              { submitting && <Spinner /> }
            </form>
          </div>
        </div>
      </HeaderSection>

      <section id="main" className="cards-section">
        <div className="container">
          <h2 tabIndex="0">Lovdata Pro- fordeler</h2>
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-6">
                  <Card icon="notifications" title="Varslinger" teaser="Bli varslet om endringer i regelverk og nye avgjørelser til lover/paragrafer og rettsområder." />
                </div>
                <div className="col-6">
                  <Card icon="selection" title="Utvalg" teaser="Dra og slipp dokumenter i utvalg. Perfekt til juridiske utdrag." />
                </div>
                <div className="col-6">
                  <Card icon="notes" title="Merknader" teaser="Skriv personlige merknader—“gule lapper”—til lover, forskrifter, enkeltparagrafer og avgjørelser." />
                </div>
                <div className="col-6">
                  <Card icon="groups" title="Grupper" teaser="Del dokumenter og merknader med dine kolleger og andre Lovdata Pro brukere." />
                </div>
              </div>
            </div>
            <div className="col-5">
              <List title="Med Lovdata Pro får alle ansatte i kommunene tilgang til:">
                <ListItem>Varslinger i epost på det rettsområdet som interesserer deg</ListItem>
                <ListItem>Personlige verktøy. Grupperinger, merknader, utdrag, markeringer, huske-funksjon.</ListItem>
                <ListItem>Dele dokumenter med kolleger og andre Lovdata Pro brukere</ListItem>
                <ListItem>Tilgang på rettsavgjørelser – mange titalls tusen dommer, mange år tilbake i tid</ListItem>
                <ListItem>Gode søkemuligheter i lovverket med historiske versjoner</ListItem>
                <ListItem>Oppdaterte kilder, rundskriv, forskrifter, vedtak, juridisk litteratur m.m.</ListItem>
                <ListItem>Ubegrenset brukerlisenser for kommunen.</ListItem>
              </List>
            </div>
          </div>
        </div>
      </section>

      <TeaserSection>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h2 tabIndex="0">Kampanjetilbud</h2>
            <Card
              featured
              icon="calendar"
              title="Få 6 måneder gratis"
              teaser={ [
                'Få 6 måneder gratis med å ',
                <span
                  tabIndex="0"
                  role="button"
                  key="card-teaser-link"
                  className="card__teaser__link"
                  onClick={ handleScrollToForm }>bestille nå</span>
              ]}
            />
          </div>
        </div>
      </TeaserSection>

      <section className="prices-section">
        <div className="container">
          { /* <table border="0">
            <thead>
              <tr>
                <td>Pristrinn</td>
                <td>Pris</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pristrinn 10 (fra 1 til 20.000 innbyggere)</td>
                <td>kr 17 900</td>
              </tr>
              <tr>
                <td>Pristrinn 20 (fra 20.001 til 40.000 innbyggere)</td>
                <td>kr 29 900</td>
              </tr>
              <tr>
                <td>Pristrinn 30 (fra 40.001 til 60.000 innbyggere)</td>
                <td>kr 39 900</td>
              </tr>
              <tr>
                <td>Pristrinn 40 (fra 60.001 til 80.000 innbyggere)</td>
                <td>kr 49 900</td>
              </tr>
              <tr>
                <td>Over 80.000 innbyggere</td>
                <td>Egen avtale</td>
              </tr>
            </tbody>
            </table> */ }


          <Table>
            <TableRow body={false}>
              <TableHeader bordered>Pristrinn</TableHeader>
              <TableHeader bordered>Pris</TableHeader>
            </TableRow>
            <TableRow>
              <TableCell bordered>Pristrinn 10 (fra 1 til 20.000 innbyggere)</TableCell>
              <TableCell bordered>kr 17 900</TableCell>
            </TableRow>
            <TableRow>
              <TableCell bordered>Pristrinn 20 (fra 20.001 til 40.000 innbyggere)</TableCell>
              <TableCell bordered>kr 29 900</TableCell>
            </TableRow>
            <TableRow>
              <TableCell bordered>Pristrinn 30 (fra 40.001 til 60.000 innbyggere)</TableCell>
              <TableCell bordered>kr 39 900</TableCell>
            </TableRow>
            <TableRow>
              <TableCell bordered>Pristrinn 40 (fra 60.001 til 80.000 innbyggere)</TableCell>
              <TableCell bordered>kr 49 900</TableCell>
            </TableRow>
            <TableRow>
              <TableCell bordered>Over 80.000 innbyggere</TableCell>
              <TableCell bordered>Egen avtale</TableCell>
            </TableRow>
            <TableRow  body={false}>
              <TableFooter bordered></TableFooter>
              <TableFooter bordered></TableFooter>
            </TableRow>
          </Table>


          <p>Alle kommunens ansatte med personlig e-postadresse på kommunens domene kan benytte seg av avtalen. Kunden faktureres på grunnlag av innbyggertallet i kommunen. Kommuneabonnement gjelder ikke for kommunale foretak som er skilt ut som egne enheter eller selskaper. Dette gjelder blant annet parkeringsselskap, biblioteker, interkommunale selskaper mm. Lovdata avgjør i tvilstilfeller om en enhet kan inkluderes i abonnementet.</p>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <address>
                <a href="mailto:marked@lovdata.no">
                  <Icon type={ 'call' } />
                  <h2>23 11 83 00</h2>
                  <p>Snakk med en av våre konsulenter.<br/>Åpningstiden er fra 0800 - 1600.</p>
                </a>
              </address>
            </div>
            <div className="col-6">
              <address>
                <a href="mailto:marked@lovdata.no">
                  <Icon type={ 'email' } />
                  <h2>marked@lovdata.no</h2>
                  <p>Send oss en e-post med det du lurer på. Tips: send med telefonnummeret ditt, så kan vi ringe deg opp igjen.</p>
                </a>
              </address>
            </div>
          </div>
        </div>
      </section>

      <FooterSection>
        <div className="row">
          <div className="col-10">
            <h2 tabIndex="0">Dette er Lovdata Pro</h2>
            <p tabIndex="0">Lovdata Pro gjør det enklerer for bedrifter å holde seg oppdatert  på endringer i relevant regelverk. Lovdata Pro er et juridisk verktøy som holder dere i bedriften oppdatert på rettsområder og samtidig gir gode søkemuligheter til det relevante dokumentet.</p>
            <p tabIndex="0">Tilgang til historiske kilder, rundskriv, rettsavgjørelser, uttalelser og vedtak.</p>
            <p tabIndex="0">Enten dine ansatte jobber som jurist, HR, HMS, eller har andre oppgaver der dere jobber med regelverket, vil dere alltid være oppdatert.</p>
            <p tabIndex="0">Vil du vite mer om Lovdata Pro</p>
            <Button primary href="https://lovdata.no/tjenester/pro/">Klikk her</Button>
          </div>
        </div>
      </FooterSection>
    </Fragment>
  );
}

export default App;
