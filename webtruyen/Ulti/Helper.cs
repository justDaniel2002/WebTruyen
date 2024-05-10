using CloudinaryDotNet.Actions;
using CloudinaryDotNet;

namespace webtruyen.Ulti
{
    public class Helper
    {
        private static string CLOUD_NAME = "dspq82lmr";
        private static string API_KEY = "977788362272316";
        private static string API_SECRET = "BY2hb1uuR_LyiFapfoJ4ig-yFok";

        public static string UploadPhoto(Stream stream)
        {
            Account account = new Account(
             CLOUD_NAME,
              API_KEY,
             API_SECRET);

            Cloudinary cloudinary = new Cloudinary(account);
            var uploadParams = new CloudinaryDotNet.Actions.ImageUploadParams()
            {
                File = new FileDescription(Guid.NewGuid().ToString(), stream),
            };
            ImageUploadResult uploadResult = cloudinary.Upload(uploadParams);
            return cloudinary.Api.UrlImgUp.BuildUrl(String.Format("{0}.{1}", uploadResult.PublicId, uploadResult.Format));
        }
    }
}
