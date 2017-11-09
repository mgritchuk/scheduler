//using System;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata;

//namespace Models
//{
//    public partial class ZNOContext : DbContext
//    {
//        public virtual DbSet<Branch> Branch { get; set; }
//        public virtual DbSet<City> City { get; set; }
//        public virtual DbSet<Class> Class { get; set; }
//        public virtual DbSet<Person> Person { get; set; }
//        public virtual DbSet<Role> Role { get; set; }
//        public virtual DbSet<School> School { get; set; }
//        public virtual DbSet<Specialty> Specialty { get; set; }
//        public virtual DbSet<Subject> Subject { get; set; }
//        public virtual DbSet<University> University { get; set; }

//        // Unable to generate entity type for table 'dbo.PersonRole'. Please see the warning messages.
//        // Unable to generate entity type for table 'dbo.PersonSubject'. Please see the warning messages.
//        // Unable to generate entity type for table 'dbo.Schedule'. Please see the warning messages.
//        // Unable to generate entity type for table 'dbo.UniversitySpecialtySubject'. Please see the warning messages.

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//            optionsBuilder.UseSqlServer(@"data source=(localdb)\MSSQLLocalDB;initial catalog=ZNO;integrated security=True;MultipleActiveResultSets=True;");
//        }

//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            modelBuilder.Entity<Branch>(entity =>
//            {
//                entity.Property(e => e.Name)
//                    .IsRequired()
//                    .HasMaxLength(128);
//            });

//            modelBuilder.Entity<City>(entity =>
//            {
//                entity.Property(e => e.Name)
//                    .IsRequired()
//                    .HasColumnType("nchar(50)");
//            });

//            modelBuilder.Entity<Class>(entity =>
//            {
//                entity.Property(e => e.Name)
//                    .IsRequired()
//                    .HasMaxLength(36);

//                entity.HasOne(d => d.School)
//                    .WithMany(p => p.Class)
//                    .HasForeignKey(d => d.SchoolId)
//                    .OnDelete(DeleteBehavior.Restrict)
//                    .HasConstraintName("FK_Class_School");
//            });

//            modelBuilder.Entity<Person>(entity =>
//            {
//                entity.Property(e => e.FirstName)
//                    .IsRequired()
//                    .HasMaxLength(64);

//                entity.Property(e => e.LastName)
//                    .IsRequired()
//                    .HasMaxLength(64);

//                entity.Property(e => e.MiddleName)
//                    .IsRequired()
//                    .HasMaxLength(64);

//                entity.HasOne(d => d.School)
//                    .WithMany(p => p.Person)
//                    .HasForeignKey(d => d.SchoolId)
//                    .OnDelete(DeleteBehavior.Restrict)
//                    .HasConstraintName("FK_Person_School");
//            });

//            modelBuilder.Entity<Role>(entity =>
//            {
//                entity.Property(e => e.Name)
//                    .IsRequired()
//                    .HasMaxLength(50);
//            });

//            modelBuilder.Entity<School>(entity =>
//            {
//                entity.Property(e => e.Address).HasColumnType("varchar(100)");

//                entity.Property(e => e.IsReserve).HasDefaultValueSql("0");

//                entity.Property(e => e.Name)
//                    .IsRequired()
//                    .HasMaxLength(200);

//                entity.HasOne(d => d.City)
//                    .WithMany(p => p.School)
//                    .HasForeignKey(d => d.CityId)
//                    .OnDelete(DeleteBehavior.Restrict)
//                    .HasConstraintName("FK_School_City");
//            });

//            modelBuilder.Entity<Specialty>(entity =>
//            {
//                entity.Property(e => e.Description).HasColumnType("text");

//                entity.Property(e => e.Name)
//                    .IsRequired()
//                    .HasMaxLength(128);

//                entity.HasOne(d => d.Branch)
//                    .WithMany(p => p.Specialty)
//                    .HasForeignKey(d => d.BranchId)
//                    .OnDelete(DeleteBehavior.Restrict)
//                    .HasConstraintName("FK_Specialty_Branch");
//            });

//            modelBuilder.Entity<Subject>(entity =>
//            {
//                entity.Property(e => e.Name)
//                    .IsRequired()
//                    .HasMaxLength(64);
//            });

//            modelBuilder.Entity<University>(entity =>
//            {
//                entity.Property(e => e.Address)
//                    .IsRequired()
//                    .HasMaxLength(256);

//                entity.Property(e => e.Name)
//                    .IsRequired()
//                    .HasMaxLength(100);

//                entity.HasOne(d => d.City)
//                    .WithMany(p => p.University)
//                    .HasForeignKey(d => d.CityId)
//                    .OnDelete(DeleteBehavior.Restrict)
//                    .HasConstraintName("FK_University_City");
//            });
//        }
//    }
//}