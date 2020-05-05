import React, { Fragment, useState } from 'react';

import {
  HeaderSection,
  FooterSection,
  FormSection,
  TeaserSection,
} from './layout';

import {
  Button,
  Card,
  Comment,
  Field,
  List,
  ListItem,
  Spinner,
  Table,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  VideoPlayer,
} from './components';

import check from './img/icon-check.svg';

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
      <a href="#content" className="hidden">Skip to content</a>
      <HeaderSection onClickButton={ handleScrollToForm }>
        <div className="row">
          <div className="col-6">
            <h1 tabIndex="0">Ditt viktigste juridiske arbeidsverktø</h1>
            <p tabIndex="0">Lovdata tilbyr et gunstig abonnement for kommunens ansatte.</p>
            <p tabIndex="0">Abonnementsprisen faktureres på grunnlag av innbyggertallet i kommunen.</p>
            <p tabIndex="0">Alle ansatte med personlig e-postadresse med kommunenes domene kan benytte seg av avtalen.</p>
          </div>

          <div className="col-6">
            <VideoPlayer />
          </div>
        </div>
      </HeaderSection>

      <section id="content" className="cards-section">
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
                <ListItem>Personlige verktøy. Grupperinger, merknader, utdrag, markeringer, huske-funksjon</ListItem>
                <ListItem>Dele dokumenter med kolleger og andre Lovdata Pro brukere</ListItem>
                <ListItem>Tilgang på rettsavgjørelser – mange titalls tusen dommer, mange år tilbake i tid</ListItem>
                <ListItem>Gode søkemuligheter i lovverket med historiske versjoner</ListItem>
                <ListItem>Oppdaterte kilder, rundskriv, forskrifter, vedtak, juridisk litteratur m.m.</ListItem>
                <ListItem>Ubegrenset brukerlisenser for kommunen</ListItem>
              </List>
              <div>
                <Button primary onClick={ handleScrollToForm }>Få 6 måneder gratis</Button>
              </div>
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

      <section className="table-section">
        <div className="container">
          <Table>
            <TableRow body={false}>
              <TableHeader></TableHeader>
              <TableHeader bordered>Lovdata.no</TableHeader>
              <TableHeader bordered>Lovdata Pro</TableHeader>
            </TableRow>

            <TableRow>
              <TableCell>Norges lover</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Sentral forskrifter</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Lokale forskrifter</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Statens personalhåndbok</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Kunngjøringer i Norsk Lovtidend</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Merknader og markeringer</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Dele med kolleger</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Grupperinger</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Dine egne utdrag</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Historiske versjoner av gjeldende forskrifter</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Rettsavgjørelser</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Publikasjoner og uttalelser</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Forarbeider og stortingsdokumenter</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Nemder og utvalg</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Traktater & EU-domstolen</TableCell>
              <TableCell bordered></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow  body={false}>
              <TableFooter></TableFooter>
              <TableFooter bordered></TableFooter>
              <TableFooter bordered></TableFooter>
            </TableRow>
          </Table>
        </div>
      </section>

      <FormSection refProp={formRef} onSubmitProp={ handleSubmitForm }>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h3 tabIndex="0">6 måneder gratis</h3>
            <Field name="name" label="Firmanavn" />
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
          </div>
        </div>
      </FormSection>

      <section className="comments-section">
        <Comment
          author="Maria Sivertsen"
          authorImg="Maria Sivertsen"
          company="Elektroskandia Norge AS"
          date="16.05.2019"
        >“Lovdata Pro hjelper oss med å holde vår bedrift oppdatert på endringer i Lovverket. <br />Som Compliance Manager er det viktig å kunne få varslinger på regelverk innenfor vår industri og arbeidsmiljø”.</Comment>
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
