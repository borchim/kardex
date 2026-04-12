import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  
  // This is the "Ask" - "Hey Supabase, give me everything from the notes table"
  const { data: notes } = await supabase.from('notes').select()

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>My Notes</h1>
      <ul>
        {notes?.map((note) => (
          <li key={note.id}>{note.content || "Empty note"}</li>
        ))}
      </ul>
    </main>
  )
}