﻿using System;
using System.Collections.Generic;

namespace webtruyen.Model;

public partial class Account
{
    public long Id { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public DateTime ModifiedDate { get; set; }

    public string? Phone { get; set; }

    public string? Address { get; set; }

    public bool IsActive { get; set; }

    public string? Token { get; set; }

    public DateTime? ExpireTime { get; set; }

    public decimal? AccountBalance { get; set; }

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual ICollection<Story> Stories { get; set; } = new List<Story>();
}
