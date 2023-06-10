export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <label>Title: </label> <input name="title" required />
        <label>Content: </label> <input name="content" required />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
