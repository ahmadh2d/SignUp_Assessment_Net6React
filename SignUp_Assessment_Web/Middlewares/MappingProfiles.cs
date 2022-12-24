using AutoMapper;
using SignUp_Assessment_Web.DTOs.Request;
using SignUp_Assessment_Web.Entities;

namespace SignUp_Assessment_Web.Middlewares
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<RegisterUserDTO, User>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));
        }
    }
}
