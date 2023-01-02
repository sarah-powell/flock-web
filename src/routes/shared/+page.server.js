import { error } from "@sveltejs/kit";

export async function load({ url }) {

  const titleParam = url.searchParams.get('t');
  const dateParam = url.searchParams.get('d');

  if (!titleParam) {
    throw error(400, {
      message: 'Title is required',
      code: 400
    });
  }

  if (!dateParam) {
    throw error(400, {
      message: 'Date is required',
      code: 400
    });
  }

  let timestamp = Number(dateParam);
  if (isNaN(timestamp)) {
    throw error(400, {
      message: 'Invalid date',
      code: 400
    });
  }
}