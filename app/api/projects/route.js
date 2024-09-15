import pool from "@/lib/db";

export async function POST(req) {
  const { title, imageurl, description } = await req.json();

  try {
    const result = await pool.query(
      "INSERT INTO projects (id, title, imageurl, description) VALUES (uuid_generate_v4(), $1, $2, $3) RETURNING *",
      [title, imageurl, description]
    );
    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM projects");
    return new Response(JSON.stringify(result.rows), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const { title, imageurl, description } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    const result = await pool.query(
      "UPDATE projects SET title = $1, imageurl = $2, description = $3 WHERE id = $4 RETURNING *",
      [title, imageurl, description, id]
    );
    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ message: "Project updated" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    const result = await pool.query(
      "DELETE FROM projects WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ message: "Project deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
