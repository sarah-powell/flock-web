import { error } from "@sveltejs/kit";

export async function load({ url }) {

  const titleParam = url.searchParams.get('title');
  const dateParam = url.searchParams.get('date');

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

  if (isNaN(Number(dateParam))) {
    throw error(400, {
      message: 'Invalid date',
      code: 400
    });
  }
}