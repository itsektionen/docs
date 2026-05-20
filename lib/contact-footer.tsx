import { z } from "zod";
const ContactSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  email: z.email().optional(),
  url: z.url().optional()
});
export const ContactsSchema = z.array(ContactSchema).optional();

export type Contacts = z.infer<typeof ContactsSchema>;
export type Contact = z.infer<typeof ContactSchema>;

export default function ContactFooter(params: { contacts: Contacts }) {
  if (params.contacts == undefined) {
    return <></>;
  }

  return (
    <div className="border-t py-6">
      <h2 className="text-md font-bold">{(params.contacts.length > 1) ? "Contacts" : "Contact"}:</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(--spacing(60),1fr))]">
        {params.contacts.map((contact, index) => Contact(contact, index))}
      </ul>
    </div>
  );
}

function Contact(contact: Contact, index: number) {
 const contents = <>
   {contact.name} {contact.role && <> - {contact.role}</>}
  </>

    let contactLink: string | undefined = undefined;
    if (contact.email) {
        contactLink = "mailto:" + contact.email;
    }
    if (contact.url) {
        contactLink = contact.url
    }

    let textContainer;
    if (contactLink) {
        textContainer = <a href={contactLink} className="underline underline-offset-3.5 decoration-fd-primary hover:opacity-80">
            {contents}
        </a>
    } else {
        textContainer = <span>{contents}</span>
    }

  return <li className="block m-1" key={index}>
    {textContainer}
  </li>;
}
