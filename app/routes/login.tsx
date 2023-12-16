import { Form, useActionData } from "@remix-run/react";
import { json, ActionFunctionArgs } from "@remix-run/node";

interface FormErrors {
  email: string[];
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email"));

  const errors = { email: [] } as FormErrors;

  if (email.trim().length === 0) {
    errors.email.push("Email cannot be blank");
  }

  if (!email.includes("@")) {
    errors.email.push("Must be a valid email");
  }

  if (errors.email.length > 0) {
    return json({ errors, message: "error" });
  }

  return json({ message: "ok", errors: null });
}

export default function LoginRoute() {
  let actionData = useActionData<typeof action>();

  return (
    <div className="container h-full grid place-items-center justify-center">
      <div>
        <h1 className="text-h1 font-headings text-center mb-16">Login</h1>
        <div>
          <p>{actionData ? actionData?.message : ""}</p>
        </div>
        <Form
          method="post"
          className="mx-auto flex min-w-[368px] max-w-sm flex-col gap-4"
        >
          <label htmlFor="email">Email</label>
          {actionData?.errors?.email.length ? (
            <li>{actionData.errors.email.join(", ")}</li>
          ) : null}
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-input-invalid"
            type="email"
            name="email"
            id="email"
          />
          <button
            type="submit"
            className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors outline-none focus-visible:ring-4 focus-within:ring-4 ring-ring ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
