/* SweetAlert2 is a ~30-50 KiB (gzipped) modal library used only in response
   to user actions (form validation, OTP results) — never needed for the
   first paint. Every page with a lead form used to import it eagerly at the
   top of the file, shipping it in the initial JS bundle site-wide. Loading
   it on first actual use instead keeps it out of that critical path. */
export async function swalFire(options) {
  const { default: Swal } = await import("sweetalert2");
  return Swal.fire(options);
}
