namespace webtruyen.DTO
{
    public class StoryCreateRequest
    {
        public string title { get; set; }
        public string description { get; set; }
        public long categoryID { get; set; }
        public IFormFile image { get; set; }
    }
}
