import { z } from "zod";
const ContactSchema = z
  .object({
    name: z.string(),
    role: z.string().optional(),
    email: z.email().optional(),
    url: z.url().optional(),
  })
  .refine(
    (x) => {
      EnsureMutuallyExclusive(x, ["email", "url"]);
    },
    {
      error: "URL and email are mutually exclusive properties",
    }
  );

function EnsureMutuallyExclusive(x: { [key: string]: any }, keys: string[]) {
  let keyCount = 0;
  for (let i = 0; i < keys.length; i++) {
    if (x[keys[i]] != undefined) {
      keyCount++;
    }
  }
  return keyCount <= 1;
}

export const ContactsSchema = z.array(ContactSchema).optional();

export type Contacts = z.infer<typeof ContactsSchema>;
export type Contact = z.infer<typeof ContactSchema>;

export default function ContactFooter(params: { contacts: Contacts }) {
  if (params.contacts == undefined) {
    return <></>;
  }

  return (
    <div className="border-t py-6">
      <h2 className="text-md font-bold">
        {params.contacts.length > 1 ? "Contacts" : "Contact"}:
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(--spacing(60),1fr))]">
        {params.contacts.map((contact, index) => Contact(contact, index))}
      </ul>
    </div>
  );
}

function Contact(contact: Contact, index: number) {
  let contactLink: string | undefined = undefined;
  if (contact.email) {
    contactLink = "mailto:" + contact.email;
  }
  if (contact.url) {
    contactLink = contact.url;
  }

  let textContainer;
  if (contactLink) {
    textContainer = (
      <a
        href={contactLink}
        className="block underline underline-offset-3.5 decoration-fd-primary hover:opacity-80"
      >
        {contact.name}
      </a>
    );
  } else {
    textContainer = <span className="block">{contact.name}</span>;
  }

  return (
    <li className="block m-1" key={index}>
      {textContainer}{" "}
      {contact.role && <div className="opacity-70 block">{contact.role}</div>}
    </li>
  );
}
