export default function AboutRoute() {
  return (
    <div className="col-[narrow] md:col-[standard-start/narrow-end]">
      <h1 className="text-h1 font-headings text-center">About</h1>
      <div className="mt-8 max-w-prose m-auto flex flex-col gap-3">
        <p>
          Hey there! I'm building this website as a little side project to play
          around with a few technologies. First of all, it's a way to experiment
          with setting up a full-stack Remix app. I've been meaning to test out
          some database options with Netlify hosting so here it is.
        </p>
        <p>As of right now, the tech stack includes:</p>
        <ul className="list-disc list-inside">
          <li>Remix</li>
          <li>Supabase with Prisma</li>
          <li>Tailwind</li>
        </ul>
        <p>
          The second bit is all about testing out a few of AI api's available.
          The first bit of functionality will be to set up an automation to
          watch a Google Drive folder for file changes and then send the audio
          files uploaded to Open AI to be transcribed and summarized. You can
          optionally set up the ability to save those transcriptions and
          summaries directly to a Notion Database of your choosing!
        </p>
      </div>
    </div>
  );
}
